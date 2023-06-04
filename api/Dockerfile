FROM python:3.11.3-alpine

RUN pip install "poetry==1.4.2"

WORKDIR /api

COPY poetry.lock pyproject.toml /api/

RUN poetry config virtualenvs.create false
RUN poetry install --no-interaction --no-ansi

COPY . .

EXPOSE 8000

CMD ["uvicorn", "api.main:app", "--host", "0.0.0.0", "--port", "8000"]
