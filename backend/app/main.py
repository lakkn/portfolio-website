from fastapi import FastAPI
from datetime import datetime
from pydantic import BaseModel
from .sudoku import run_solver


class Board(BaseModel):
    board: str

app = FastAPI()

@app.get("/day", tags=["Dates"])
def get_day_of_week():
    '''Get the current day of week
    '''
    return datetime.now().strftime("%A")

@app.post("/sudoku")
def sudoku_solver(boards: Board):
    '''Solve the Sudoku
    '''
    board = []
    row = []
    for i in range(0,81):
        if i%9 == 0 and i != 0:
            board.append(row)
            row = []
        row.append(int(boards.board[i:i+1]))
    board.append(row)
    solved = run_solver(board)
    final = ""
    for i in range(0,9):
        for j in range(0,9):
            final += str(solved[i][j])
    return final