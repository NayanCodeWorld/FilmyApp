import React, {useState} from 'react'

import './index.scss'

const SwitchTabs = (props) => {

  const [selectedTab, setSelectedTab] = useState(0)
  const [left, setLeft] = useState(0)

    // destructure method and properties from props
    const {options, onTabChange} = props

  const activeTab = (tab, index) =>{
    setLeft(index * 100)
    setTimeout(() =>{
      setSelectedTab(index)
    }, 300)
    onTabChange(tab, index)
  } 
  
  return (
    <div className='switchingTabs'>
      <div className='tabItems'>
        {options.map((tab, index) => (
          <span key={index} 
          className={`tabItem ${selectedTab === index && 'active'}`} 
          onClick={() => activeTab(tab, index)}
          >
            {tab}
          </span>
        ))}
        <span className="movingBg" style={{left}} />
      </div>
    </div>
  )
}

export default SwitchTabs