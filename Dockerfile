FROM python:3.9

WORKDIR /portfolio-website

COPY ./requirements.txt /portfolio-website/requirements.txt

RUN pip install --no-cache-dir --upgrade -r /portfolio-website/requirements.txt

COPY ./app /portfolio-website/app

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "80"]