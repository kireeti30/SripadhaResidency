IMAGES TO ADD
=============

Place your hotel images here. The following filenames are expected:

HERO:
  hero-bg.jpg          - Main hero background image (hotel exterior / Tirumala view)
                         Recommended: 1920x1080px

ROOMS:
  room-standard.jpg    - Standard Room interior photo
  room-deluxe.jpg      - Deluxe Room interior photo  
  room-family.jpg      - Family Suite interior photo
  room-dorm.jpg        - Pilgrim Dormitory photo
                         Recommended: 800x600px each

ABOUT:
  about-hotel.jpg      - Hotel building / exterior photo
                         Recommended: 800x900px

LOGO:
  logo.png             - Sri Pada Homestay logo (transparent background)
                         Recommended: 200x200px

HOW TO USE IN TEMPLATES
========================

Hero background in home.component.css:
  .hero { background-image: url('/assets/images/hero-bg.jpg'); }

Room images in home.component.html (replace emoji):
  <img [src]="'assets/images/room-' + room.id + '.jpg'" [alt]="room.name">

Logo in header.component.html (replace emoji div):
  <img src="assets/images/logo.png" alt="Sri Pada Logo">

About image in about.component.html (replace placeholder div):
  <img src="assets/images/about-hotel.jpg" alt="Sri Pada Homestay">
