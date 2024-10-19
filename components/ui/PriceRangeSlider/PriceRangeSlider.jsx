'use client'
import React, { useState } from 'react'
import { Range } from 'react-range'
import './price-range-slider.scss'

const PriceRangeSlider = () => {
    const [values, setValues] = useState([0, 1000000])

    return (
        <div className="slider-container">
            <Range
                values={values}
                step={20000}
                min={0}
                max={1000000}
                onChange={(values) => setValues(values)}
                renderTrack={({ props, children }) => {
                    const [min, max] = [0, 1000000]
                    const left = ((values[0] - min) / (max - min)) * 100
                    const right = ((values[1] - min) / (max - min)) * 100

                    return (
                        <div
                            {...props}
                            className="slider-track"
                            style={{
                                background: `linear-gradient(to right, #ccc ${left}%, var(--primary-color) ${left}%, var(--primary-color) ${right}%, #ccc ${right}%)`
                            }}
                        >
                            {children}
                        </div>
                    )
                }}
                renderThumb={({ props }) => <div {...props} className="slider-thumb" />}
            />
            <div className="slider-values">
                <span className="slider-value">{values[0].toLocaleString('vi-VN')}đ</span>
                <span className="slider-value">{values[1].toLocaleString('vi-VN')}đ</span>
            </div>
        </div>
    )
}

export default PriceRangeSlider
