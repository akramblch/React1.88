import React from 'react'
import { useContext } from 'react';
import { CustomContext } from '../../../utils/context';
import SideBarItem from './SideBarItem';

const SideBar = () => {

    const {gender, category, changeGender, changeCategory} = useContext(CustomContext)

  return (
    <aside className='sideBar'>
        <div className='sideBar__lang'>
            <p onClick={() => changeGender('womфn')} className={`sideBar__lang-item  ${gender === 'woman' ? 'active' : ''}`}>Женщины</p>
            <p onClick={() => changeGender('men')} className={`sideBar__lang-item  ${gender === 'men' ? 'active' : ''}`}>Мужчины</p>
        </div>
        <ul className='sideBar__menu'>
           <SideBarItem value={'t-short'} text='Футболки'/>
           <SideBarItem value={'sweatshirts'} text='Кофты'/>
           <SideBarItem value={'pants'} text='Штаны'/>
           <SideBarItem value={'shoes'} text='Обувь'/>
           
        </ul>
    </aside>
    )
}

export default SideBar;