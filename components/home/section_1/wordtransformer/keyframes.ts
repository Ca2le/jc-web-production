import { keyframes } from 'styled-components'

const crazy = keyframes`
0%  {position: absolute;}
10% {transform: translateX(15%) scaleX(1.3) scaleY(0.9);}
20% {transform: translateX(16%) scaleX(1.33) scaleY(0.9);}
30% {transform: translateX(16%) scaleX(1.34) scaleY(0.9);}
40% {transform: translateX(-15%) scaleX(0.7) scaleY(1.4);}
47% {transform: translateX(6%) scaleX(1.15) scaleY(0.9);}
52% {transform: translateX(0) scaleX(1) scaleY(1);}
100%{position: absolute;}
`
const funny = keyframes`
0%  {position: absolute;}
10%  {transform: translateY(0) scaleX(1) scaleY(1);}
15% {transform: translateY(10%) scaleX(1.2) scaleY(0.8);}
30% {transform: translateY(10%) scaleX(1.2) scaleY(0.8);}
40% {transform: translateY(-17%) scaleX(0.95) scaleY(1.05);}
45% {transform: translateY(0) scaleX(1) scaleY(1);}
55% {transform: translateY(10%) scaleX(1.2) scaleY(0.8);}
60% {transform: translateY(0) scaleX(1) scaleY(1);}
100%{position: absolute;}
`
const beautiful = keyframes`
0%  {position: absolute;}
9% {transform: skew(0deg, 0deg);}
10% {transform: skew(6deg, -7deg);}
12% {transform: skew(0deg, 0deg);}
14% {transform: skew(-7deg, 5deg);}
16% {transform: skew(0deg, 0deg);}
18% {transform: skew(7deg, -6deg);}
20% {transform: skew(0deg, 0deg);}
22% {transform: skew(-6deg, 7deg);}
24% {transform: skew(0deg, 0deg);}
26% {transform: skew(7deg, -8deg);}
28% {transform: skew(0deg, 0deg);}
30% {transform: skew(-7deg, 6deg);}
32% {transform: skew(0deg, 0deg);}
100%{position: absolute;}
`
const calm = keyframes`
0%  {position: absolute;}
10%  {transform: translateY(0) scaleX(1) scaleY(1);}
16% {transform: translateY(3%) scaleX(1.1) scaleY(0.95);}
20%  {transform: translateY(0) scaleX(1) scaleY(1);}
22% {transform: translateY(-2%) scaleX(0.95) scaleY(1.05);}
34% {transform: translateY(3%) scaleX(1.15) scaleY(0.95);}
44% {transform: translateY(0) scaleX(1) scaleY(1);}
100%{position: absolute;}
`

export const keyFrames = [crazy, funny, beautiful, calm]