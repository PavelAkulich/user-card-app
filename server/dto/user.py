from pydantic import BaseModel

class User(BaseModel):
    name: str
    age: str
    position: str
    email: str
    info: str