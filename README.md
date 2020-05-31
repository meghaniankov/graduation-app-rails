# Grad App

An app built as a graduation gift for my sister. 

It's a place for friends and family to leave her congratulations messages that she can go back and view any time. 

## Deployed App

https://maddie2020.herokuapp.com/

## Built With

* Ruby
* Rails
* JavaScript
* jQuery
* Bootstrap
* ActiveRecord/PostgreSQL
* Heroku 

## Design Examples
### Homepage
![Homepage](./app/assets/images/screenshots/grad_app_screenshot_welcome.png)

### Homepage (after click)
![Homepage](./app/assets/images/screenshots/grad_app_screenshot_welcome2.png)

### New Message
![New Message](./app/assets/images/screenshots/grad_app_screenshot_new_message.png)

### Congratulations
![Congratulations](./app/assets/images/screenshots/grad_app_screenshot_congrats.png)

### Messages List
![Messages List](./app/assets/images/screenshots/grad_app_screenshot_message_list.png)

### Message 
Opens from click on message in message list & closes on click of message (using jQuery).
![Message](./app/assets/images/screenshots/grad_app_screenshot_message.png)


## Getting Started

First, clone this repository. Then:

```
bundle install
bin/rails db:create
bin/rails db:migrate
```

## Running the program locally

### Start Server

```sh
$ rails server
```

### View in Browser

```
localhost:3000
```