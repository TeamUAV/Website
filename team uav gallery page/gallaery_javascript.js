const body=document.querySelector('body')

const header = document.createElement('header')

const nav=document.createElement('nav')

const ncent = document.createElement('div')
ncent.className='ncent'

const center = document.createElement('div')
center.className='center'

const images=document.createElement('div')
images.className='images'

const title=document.createElement('img')
title.id='title'
title.src="photos/EXPLORE TEAM UAV.png"

let img_1=document.createElement('img')
let img_2=document.createElement('img')
let img_3=document.createElement('img')
let img_4=document.createElement('img')
let img_5=document.createElement('img')
let img_6=document.createElement('img')
let img_7=document.createElement('img')
let img_8=document.createElement('img')
let img_9=document.createElement('img')
let img_10=document.createElement('img')
let img_11=document.createElement('img')
let img_12=document.createElement('img')
let img_13=document.createElement('img')
img_1.id='img_1'
img_2.id='img_2'
img_3.id='img_3'
img_4.id='img_4'
img_5.id='img_5'
img_6.id='img_6'
img_7.id='img_7'
img_8.id='img_8'
img_9.id='img_9'
img_10.id='img_10'
img_11.id='img_11'
img_12.id='img_12'
img_13.id='img_13'
img_1.src='photos/Polygon 9 (1).png'
img_2.src = "photos/Vector 3.png";
img_3.src = "photos/Vector 4.png";
img_4.src = "photos/Polygon 13 (1).png";
img_5.src = "photos/Polygon 10 (1).png";
img_6.src = "photos/Polygon 8.png";
img_7.src = "photos/Polygon 2.png";
img_8.src = "photos/Polygon 11.png";
img_9.src = "photos/Polygon 6.png";
img_10.src = "photos/Polygon 4.png";
img_11.src = "photos/Vector 2.png";
img_12.src = "photos/Polygon 12.png";
img_13.src = "photos/Polygon 5.png";

images.appendChild(img_1)
images.appendChild(img_2)
images.appendChild(img_3)
images.appendChild(img_4)
images.appendChild(img_5)
images.appendChild(img_6)
images.appendChild(img_7)
images.appendChild(img_8)
images.appendChild(img_9)
images.appendChild(img_10)
images.appendChild(img_11)
images.appendChild(img_12)
images.appendChild(img_13)

const ellipse=document.createElement('div')
ellipse.id='elp'
const elp_1=document.createElement('img')
elp_1.id='elp_1'
elp_1.src='photos/Ellipse 5.png'
const elp_2=document.createElement('img')
elp_2.id='elp_2'
elp_2.src='photos/Ellipse 5.png'
ellipse.appendChild(elp_1)
ellipse.appendChild(elp_2)

center.appendChild(title)
center.appendChild(images)
center.appendChild(ellipse)

header.appendChild(nav)
header.appendChild(ncent)
header.appendChild(center)
body.appendChild(header)

const gallery=document.createElement('div')
gallery.className='gallery'

const gal_img1=document.createElement('img')
gal_img1.id='gal_img1'
gal_img1.src="photos/GALLERY (2).png"
gallery.appendChild(gal_img1)

const gal_img2=document.createElement('img')
gal_img2.id='gal_img2'
gal_img2.src="photos/GALLERY (1).png"
gallery.appendChild(gal_img2)

ncent.appendChild(gallery)

const bk_tri=document.createElement('div')
bk_tri.className='bk_tri'
ncent.appendChild(bk_tri)

const tri1=document.createElement('img')
tri1.id='tri1'
tri1.src="photos/Polygon 29 (1).png"
bk_tri.appendChild(tri1)

const tri2=document.createElement('img')
tri2.id='tri2'
tri2.src="photos/Polygon 28 (1).png"
bk_tri.appendChild(tri2)

const tri3=document.createElement('img')
tri3.id='tri3'
tri3.src="photos/Polygon 24 (1).png"
bk_tri.appendChild(tri3)

const tri4=document.createElement('img')
tri4.id='tri4'
tri4.src="photos/Polygon 27.svg"
bk_tri.appendChild(tri4)

const tri5=document.createElement('img')
tri5.id='tri5'
tri5.src="photos/Polygon 28 (2).png"
bk_tri.appendChild(tri5)

const tri6=document.createElement('img')
tri6.id='tri6'
tri6.src="photos/Polygon 29 (2).png"
bk_tri.appendChild(tri6)

const tri7=document.createElement('img')
tri7.id='tri7'
tri7.src="photos/Polygon 27 (2).png"
bk_tri.appendChild(tri7)

const tri8=document.createElement('img')
tri8.id='tri8'
tri8.src="photos/Polygon 24 (2).png"
bk_tri.appendChild(tri8)

const lines=document.createElement('div')
lines.className='lines'
ncent.appendChild(lines)

const left_tp=document.createElement('img')
left_tp.id='left_tp'
left_tp.src="photos/Line 17.png"
lines.append(left_tp)

const left_m=document.createElement('img')
left_m.id='left_m'
left_m.src="photos/Line 16.png"
lines.append(left_m)

const left_bt=document.createElement('img')
left_bt.id='left_bt'
left_bt.src="photos/Line 14.png"
lines.append(left_bt)

const right_tp=document.createElement('img')
right_tp.id='right_tp'
right_tp.src="photos/Line 20.png"
lines.append(right_tp)

const right_m=document.createElement('img')
right_m.id='right_m'
right_m.src="photos/Line 18.png"
lines.append(right_m)

const right_bt=document.createElement('img')
right_bt.id='right_bt'
right_bt.src="photos/Line 19.png"
lines.append(right_bt)

const button=document.createElement('div')
ncent.append(button)

const btn_left=document.createElement('img')
btn_left.id="btn_left"
btn_left.src='photos/Polygon 32.png'
button.appendChild(btn_left)

const btn_right=document.createElement('img')
btn_right.id="btn_right"
btn_right.src='photos/Polygon 33.png'
button.appendChild(btn_right)