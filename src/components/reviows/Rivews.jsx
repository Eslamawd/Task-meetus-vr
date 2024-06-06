import React from 'react';
import { BiSolidStar, BiSolidStarHalf, BiStar } from 'react-icons/bi';
import './rivews.css'
function  Rivews ({ riteng }) {

let revews1 = Array.from({ length: riteng }).map((_, index) => (<BiSolidStar key={index} className='new-riting' />) )
 if(4 < riteng & 5 > riteng) {
   revews1.push(<BiSolidStarHalf className='new-riting' />)
 } else if(3 < riteng & 4 > riteng) {
  revews1.push(<BiSolidStarHalf className=' new-riting' />)
  revews1.push(<BiStar className='new-riting' />)

 } else if(2 < riteng & 3 > riteng) {
  revews1.push(<BiSolidStarHalf className='new-riting' />)
  revews1.push(<BiStar className=' new-riting' />)
  revews1.push(<BiStar className='new-riting' />)

 } 
  else if(riteng === 4 ) {
 
  revews1.push(<BiStar className='new-riting' />)
 } 
  else if(riteng === 3 ) {
  revews1.push(<BiStar className=' new-riting' />)
  revews1.push(<BiStar className=' new-riting' />)
 } 
  else if(riteng === 2 ) {
  revews1.push(<BiStar className=' new-riting' />)
  revews1.push(<BiStar className=' new-riting' />)
  revews1.push(<BiStar className=' new-riting' />)
 } 
 
  return revews1

};

export default Rivews;