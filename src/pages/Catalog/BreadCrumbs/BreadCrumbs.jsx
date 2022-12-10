import React from 'react'
import { useContext } from 'react';
import CategoryTitle from '../../../components/CategoryTitle/CategoryTitle';
import { CustomContext } from '../../../utils/context';
const BreadCrumbs = () => {

  const {gender, category} = useContext(CustomContext)

  return (
    <ul className='breadCrumbs'>
        <li className='breadCrumbs__item'>Главная</li>
        <li className='breadCrumbs__item'>
          {gender === 'women' && 'Женщины'}
          {gender === 'men' && 'Мужчины'}
        </li>
        <li className='breadCrumbs__item'>
          <CategoryTitle/>
        </li>
    </ul>
  )
}

export default BreadCrumbs;