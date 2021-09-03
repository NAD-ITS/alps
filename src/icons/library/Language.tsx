import React from 'react'

import Svg from '../../helpers/Svg'
import {IconProps} from "./IconProps";

const Language = ({fill}: IconProps): JSX.Element => (
    <Svg viewBox={"0 0 10 10"} fill={fill}>
        <path
            d="M10,4V2H6V0H4V2H0V4H5.9A9.16,9.16,0,0,1,4.51,5.56a8.84,8.84,0,0,1-1-1.08L1.9,5.74a12,12,0,0,0,1,1A26.55,26.55,0,0,1,.55,8.11l.9,1.78a22.2,22.2,0,0,0,3-1.8,23.58,23.58,0,0,0,3.06,1.8l.9-1.78A22.43,22.43,0,0,1,6.11,6.78,10.49,10.49,0,0,0,8.22,4Z"/>
    </Svg>
)

export default Language
