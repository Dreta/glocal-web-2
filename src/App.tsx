import { MapInteractionCSS } from 'react-map-interaction'
import map from './assets/map.webp'
import layer2 from './assets/layer2.webp'
import layer3 from './assets/layer3.webp'
import layer4 from './assets/layer4.webp'
import data from './assets/data.json'
import { useState } from 'react'
import SelectedModal from './SelectedModal'

export default function App() {
    const [layer, setLayer] = useState('4')
    const [selected, setSelected] = useState<string | null>(null)

    return (
        <div style={{ backgroundColor: layer === '1' ? 'white' : '#a9a9a9' }}>
            <SelectedModal value={selected ? data.points[selected] : null} close={() => setSelected(null)} />
            <div className='w-screen h-screen'>
                <div className='absolute top-0 p-5 z-20'>
                    <div className='shadow-lg bg-white rounded-3xl p-3'>
                        <button className='rounded-full hover:bg-gray-100 transition-colors duration-100 p-3 mb-1 blck' onClick={() => setLayer('1')}>F1</button>
                        <button className='rounded-full hover:bg-gray-100 transition-colors duration-100 p-3 mb-1 block' onClick={() => setLayer('2')}>F2</button>
                        <button className='rounded-full hover:bg-gray-100 transition-colors duration-100 p-3 mb-1 block' onClick={() => setLayer('3')}>F3</button>
                        <button className='rounded-full hover:bg-gray-100 transition-colors duration-100 p-3 block' onClick={() => setLayer('4')}>F4</button>
                    </div>
                </div>

                <div className='absolute bottom-0 w-full lg:w-96 xl:w-[32rem] p-5 z-20'>
                    <div className='shadow-lg bg-white rounded-3xl p-5'>
                        <h1 className='font-bold text-2xl mb-1'>The Quiet Compass</h1>
                        <p className='mb-3'>Rediscover quietness.</p>
                        <div>
                            <div className='flex mb-2 items-center'>
                                <div className='rounded-full w-3 h-3 bg-green-300 mr-2'></div>
                                <p className='text-sm'>Very Quiet</p>
                            </div>
                            <div className='flex mb-2 items-center'>
                                <div className='rounded-full w-3 h-3 bg-green-400 mr-2'></div>
                                <p className='text-sm'>Somewhat Quiet</p>
                            </div>
                            <div className='flex mb-2 items-center'>
                                <div className='rounded-full w-3 h-3 bg-green-700 mr-2'></div>
                                <p className='text-sm'>Somewhat Noisy</p>
                            </div>
                            <div className='flex items-center'>
                                <div className='rounded-full w-3 h-3 bg-green-900 mr-2'></div>
                                <p className='text-sm'>Very Noisy</p>
                            </div>
                        </div>
                    </div>
                </div>

                <MapInteractionCSS
                    minScale={0.3}
                    maxScale={3}
                    showControls={true}
                    translationBounds={{
                        xMin: -1000,
                        xMax: 1000,
                        yMin: -800,
                        yMax: 800
                    }}>
                    <div className='relative' style={{
                        width: '2361px', height: '2381px', backgroundImage: `url(${{
                            '1': map,
                            '2': layer2,
                            '3': layer3,
                            '4': layer4
                        }[layer]})`
                    }}>
                        {Object.entries(data.points).map(([key, value]) => {
                            if (layer !== value.layer) {
                                return;
                            }
                            let color;
                            if (value.decibel <= 40) {
                                color = 'bg-green-300'
                            } else if (value.decibel <= 50) {
                                color = 'bg-green-400'
                            } else if (value.decibel <= 60) {
                                color = 'bg-green-700'
                            } else {
                                color = 'bg-green-900'
                            }
                            return <button onClick={() => setSelected(key === selected ? null : key)} onTouchEnd={() => setSelected(key === selected ? null : key)}
                                className={`absolute z-20 rounded-full w-16 h-16 border-8 border-gray-50 border-solid ${color} ${selected === key ? 'shadow' : 'shadow-xl'}`} style={{ left: value.x + 'px', top: value.y + 'px' }} key={key}>
                                <p className='w-0 h-0 overflow-hidden'>{value.name}</p>
                            </button>
                        })
                        }
                    </div>
                </MapInteractionCSS>
            </div>
        </div>
    )
}
