from fastapi import FastAPI, UploadFile,Form,Response
from fastapi.responses import JSONResponse
#JSON타입으로 인코더
from fastapi.encoders import jsonable_encoder
# import Form #->터미널에 pip install python-multipart 엔터
from fastapi.staticfiles import StaticFiles
from typing import Annotated
import sqlite3

con = sqlite3.connect('db.db', check_same_thread=False)
cur = con.cursor()

cur.execute(f"""
            CREATE TABLE IF NOT EXISTS items (
	        id INTEGER PRIMARY KEY, 
	        title TEXT NOT NULL, 
	        image BLOB,
	        price INTEGER NOT NULL,
	        description TEXT,
	        place TEXT NOT NULL,
	        insertAt INTEGER NOT NULL 
            );
            """)

app = FastAPI()
 
# POST메소드에서 items라는 API를 받으면
@app.post('/items')
# 함수정의(각각의 item들의 값을 받음)
async def create_item(image:UploadFile #from fastapi import UploadFile
                , title:Annotated[str,Form()]#from fastapi import Form
                                             #from typing import Annotated
                                             #title정보는 form data형식으로 문자열로 옮
                , price:Annotated[int,Form()]
                , description:Annotated[str,Form()]
                , place:Annotated[str,Form()]
                , insertAt:Annotated[int,Form()]
                ):      
    #이미지데이터는 블록타입으로 크게 오기때문에, 읽을 시간을 주기 -> await
    image_bytes = await image.read()
    #데이터베이스에 insert, .hex -> 16진법으로 변환(용량줄이기)
    #docs에서 테스트시 insertAt에 넣는 시간 = console에 new Date().getTime()입력시 나오는 숫자기입
    cur.execute(f"""
                INSERT INTO 
                items (title, image, price, description, place, insertAt)
                VALUES('{title}','{image_bytes.hex()}', {price},'{description}','{place}',{insertAt})
                
                """)
    con.commit()
    return '200'  

# array를 읽는get(read)요청이 들어왔을 때 items라는 API를 사용함
@app.get('/items')
# 함수이름 지정
async def get_items():
    #칼럼명도 같이 가져오기 ex: [['id',1],['title':'~~']...]
    con.row_factory = sqlite3.Row
    #db를 가져오는 과정에서 connection의 현재 위치 = cursor -> 현재위치 업데이트 필요
    cur=con.cursor()
    rows=cur.execute(f"""
                     SELECT * from items;
                     """).fetchall() #모두가져오는문법이기에 execute().ferchall()사용
    #자바스크립트문법으로 응답, dict()->array형식으로 가져옴
    return JSONResponse(jsonable_encoder(
                        dict(row) for row in rows))
    
    
#이미지를 읽는 get(read)메소드
@app.get('/images/{item_id}')
async def get_image(item_id):
    cur = con.cursor()
    # 16진법으로 가져옴
    image_bytes = cur.execute(f"""
                              SELECT image from items WHERE id={item_id}
                              """).fetchone()[0] #1개만 가져옴
    #16진법을 2진법으로 바꿔서 응답반환
    return Response(content=bytes.fromhex(image_bytes), media_type='image/*')

# root패스는 맨밑에 작성
app.mount("/", StaticFiles(directory="frontend", html=True), name="frontend")
