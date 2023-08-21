from models.user import User
from sqlalchemy.orm import Session
from dto import user


def create_user(data: user.User, db):
    user = User(name=data.name, position=data.position, age=data.age, info=data.info, email=data.email, photo=data.photo)
    try:
        db.add(user)
        db.commit()
        db.refresh(user)
    except Exception as e:
        print(e)
    return user


def get_user(id: int, db):
    return db.query(User).filter(User.id == id).first()

def get_list(db: Session):
    return db.query(User).all()


def update_user(data: user.User, db, id: int):
    user = db.query(User).filter(User.id == id).first()
    user.name = data.name
    user.age = data.age
    user.position = data.position
    user.info = data.info
    user.email = data.email
    user.photo = ''
    db.add(user)
    db.commit()
    db.refresh(user)
    return user


def delete_user(id: int, db):
    user = db.query(User).filter(User.id == id).delete()
    db.commit()
    return user

def connectPhoto(id: int, photo: str, db):
    user = db.query(User).filter(User.id == id).first()
    user.photo = photo
    db.add(user)
    db.commit()
    db.refresh(user)
    return user
