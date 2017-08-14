#!/bin/bash
cd /opt/backups/database
NOW=$(date +"%d-%m-%Y")
DIR="exdump_$NOW"
mkdir $DIR
sudo chmod 777 -R $DIR
mysqldump -u root -proot testapi  > $DIR/bkp.sql
