# Medical Hackathon
About this applciation 

## How To install

Clone the repository first
```
https://github.com/GeonYoon/medical_hackathon.git
```

### Frontend Configuration

```
cd frontend
npm install 
npm start 
```

### Backend Configuration

Make sure you have following software installed in your system. 
* Python3
* pip3

I highly encourage you to install the virutal environment so that you can create an independent environment
for this project. This can keep you out from affecting other projects by installing anything for this. 
```
pip3 install virtualenv 
```
Create virtual environment on the same dir where this project root folder is located at. 
Activate the environment
```
virtualenv -p python3 [envname]
source [envname]/bin/activate 
```
Install all the dependencies for the project.
```
cd backend
pip install -r requirements.txt
```

Create your own super user for /admin
```
python manage.py makemigrations
python manage.py migrate
```

You can access to admin page with following info
```
username : disk
password : disk1234
```

Run server with following line
```
python3 manage.py runserver
```


## Built With

* [Django](https://www.djangoproject.com) - Python Web framework
* [Django REST framework](https://www.django-rest-framework.org) - To handle API requests
* [React](https://reactjs.org/) - Used to build client side
* [Redux](http://redux.js.org/docs/basics/UsageWithReact.html) - Predictable state container for JavaScript apps

## Authors
* **Geon Yoon ** - *Initial work* - [GeonYoon](https://github.com/GeonYoon)