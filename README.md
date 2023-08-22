# user-card-app

run back:
    cd ./server/
    pip install -r requirements.txt
    python -m uvicorn main:app --reload
run front:
    cd ./client/
    npm install
    npm run dev