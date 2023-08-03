import React from 'react'
import SectionOne from '../Sections/SectionOne/SectionOne'
import SectionTwo from '../Sections/SectionTwo/SectionTwo'
import SectionThree from '../Sections/SectionThree/SectionThree'
import SectionFour from '../Sections/SectionFour/SectionFour'
import SectionFive from '../Sections/SectionFive/SectionFive'
import SectionSix from '../Sections/SectionSix/SectionSix'
import SectionSeven from '../Sections/SectionSeven/SectionSeven'
import SectionEight from '../Sections/SectionEight/SectionEight'
import { useSelector } from 'react-redux'
import s from './BuySection.module.css'
const Section = () => {
    const {sectionType} = useSelector(state => state.sectionType);
    return (
        <div className={s.wrap}>
            {sectionType == "full" ? <SectionOne /> : null}
            {sectionType == "1/2" ? <SectionTwo /> : null}
            {sectionType == "1/3" ? <SectionThree /> : null}
            {sectionType == "1/4" ? <SectionFour /> : null}
            {sectionType == "1/5" ? <SectionFive /> : null}
            {sectionType == "1/6" ? <SectionSix /> : null}
            {sectionType == "1/7" ? <SectionSeven /> : null}
            {sectionType == "1/8" ? <SectionEight /> : null}
        </div>
    )
}

export default Section