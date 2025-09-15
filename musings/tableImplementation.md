# How do I implement the table feature?

## Guest Seater Panel needs to have a registry of all tables

* To render all tables
* A place to resolve on drag and on resize - place to check conflicts?

## Table size and position needs to be tracked

## what params will tables need to be instantiated?

* Bounds - the parent box itself (kinda easy)
* position
* square or circle

## Table rendering

* set border stuff
* Set default width and height - as percentages (i think)
* If circle:
  * lock aspect ratio
  * set border radius 50%
  * set width and height equal
* if rect:
  * Nothing special?