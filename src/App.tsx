import {MapInteractionCSS} from 'react-map-interaction'
import map from './assets/map.webp'

export default function App() {
    return (
        <div className='w-screen h-screen'>
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
                minScale={0.5}
                maxScale={3}
                showControls={true}
                translationBounds={{
                    xMin: -1000,
                    xMax: 1000,
                    yMin: -800,
                    yMax: 800
                }}>
                <img src={map} alt='Map'/>
            </MapInteractionCSS>
        </div>
    )
}
