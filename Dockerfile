FROM python:2
ENV PYTHONUNBUFFERED 1
RUN mkdir /ngrana
WORKDIR /ngrana
COPY . /ngrana/
RUN pip install -r ./ngrana/requirements.txt
