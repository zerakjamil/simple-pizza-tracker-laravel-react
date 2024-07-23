<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

# Pizza Tracker

## Overview
This project is a web application built with PHP and Reactjs, utilizing Composer for PHP dependencies and npm for Reactjs dependencies. It leverages Docker for containerization and Docker Compose for orchestration.

## Features
- PHP 8.2 with Apache
- MySQL 8.4 for database management
- Node.js 22.2.0 for JavaScript runtime
- Composer for PHP dependency management
- npm for JavaScript dependency management
- Docker and Docker Compose for containerization

## Prerequisites
- Docker
- Docker Compose

## Setup

1. **Clone the repository:**
    ```sh
    git clone https://github.com/zerakjamil/simple-pizza-tracker-laravel-react.git
    cd simple-pizza-tracker-laravel-react
    ```

2. **Build and start the containers:**
    ```sh
    docker-compose up --build
    ```

3. **Access the application:**
    - The web application will be available at `http://localhost:8000`
    - The MySQL database will be available at `localhost:3306`

