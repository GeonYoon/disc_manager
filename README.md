# Medical Hackathon
![](giphy.gif | width=500)


This is a web application helping you manage your back and prevent causing lumbar disc. Our team thinks that personalize excercise should be performed when you're young enough to not feel the pain from your back. Therefore, this application asks you a simple few things that you can get from local healthcare centers. Based on the received information, the app recommends customized exercises and health information. Also, we give  1 to 100 statistics based scores that can estimate your back spine physical condition. In addition, you can find your friends on the app and check each other's scores. Those will bring positive competitions. (Some parts in the application are written in Korean since the hackathon held in Korea)

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
Migrate all the changes
```
python manage.py makemigrations
python manage.py migrate
```
Create your own super user. 
```
python manage.py createsuperuser
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
* ** Geon Yoon ** - *Initial work* - [GeonYoon](https://github.com/GeonYoon)
* ** kangjuw ** - *Initial work* - [kangjuw](https://github.com/kangjuw)
* ** phu54321 ** - *Initial work* - [phu54321](https://github.com/phu54321)