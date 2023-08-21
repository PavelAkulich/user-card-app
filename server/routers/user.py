from fastapi import APIRouter, Depends, UploadFile, File
from sqlalchemy.orm import Session
from database import get_db
from service import user as UserService
from dto import user as UserDTO

router = APIRouter()

@router.post('/', tags=['user'])
async def create(data: UserDTO.User = None, db: Session = Depends(get_db)):
    return UserService.create_user(data, db)

@router.get('/{id}', tags=['user'])
async def get(id: int = None, db: Session = Depends(get_db)):
    return UserService.get_user(id, db)

@router.put('/{id}', tags=['user'])
async def put(id: int = None, data: UserDTO.User = None, db: Session = Depends(get_db)):
    return UserService.update_user(data, db, id)

@router.delete('/{id}', tags=['user'])
async def delete(id: int = None, db: Session = Depends(get_db)):
    return UserService.delete_user(id, db)

@router.get('/list/', tags=['user'])
async def get_list(db: Session = Depends(get_db)):
    return UserService.get_list(db)

@router.post('/{id}/photo/', tags=['user'])
async def connect_photo(id: int = None, photo: UploadFile = File(...), db: Session = Depends(get_db)):
    file_location = f"media/{photo.filename}"
    with open(file_location, "wb+") as file_object:
        file_object.write(photo.file.read())
    return UserService.connectPhoto(id, file_location, db)