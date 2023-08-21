from sqlalchemy import Boolean, Column, Integer, String
from database import Base


class User(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    age = Column(String)
    position = Column(String)
    email = Column(String, unique=True)
    info = Column(String)
    photo = Column(String)
