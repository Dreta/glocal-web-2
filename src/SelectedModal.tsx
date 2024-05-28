import { faChair, faHeadphones, faInbox, faPlug, faTimes, faWifi } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function SelectedModal({ value, close }: { value: object, close: () => void }) {
    if (value === null) {
        return null
    }

    let decibelComment
    let decibelColor
    if (value.decibel <= 40) {
        decibelComment = 'Very Quiet'
        decibelColor = 'text-green-300'
    } else if (value.decibel <= 50) {
        decibelComment = 'Somewhat Quiet'
        decibelColor = 'text-green-400'
    } else if (value.decibel <= 60) {
        decibelComment = 'Somewhat Noisy'
        decibelColor = 'text-yellow-400'
    } else {
        decibelComment = 'Very Noisy'
        decibelColor = 'text-red-400'
    }

    let wifiComment
    let wifiColor
    if (value.connectivity === 3) {
        wifiComment = 'Strong Wi-Fi Connectivity'
        wifiColor = 'text-green-300'
    } else if (value.connectivity === 2) {
        wifiComment = 'Limited Wi-Fi Connectivity'
        wifiColor = 'text-yellow-400'
    } else if (value.connectivity === 1) {
        wifiComment = 'Weak Wi-Fi Connectivity'
        wifiColor = 'text-yellow-600'
    } else if (value.connectivity === 0) {
        wifiComment = 'No Wi-Fi Connectivity'
        wifiColor = 'text-red-400'
    }

    let chairColor
    if (value.chairs > 0) {
        chairColor = 'text-green-300'
    } else {
        chairColor = 'text-red-400'
    }

    let tableColor
    if (value.tables > 0) {
        tableColor = 'text-green-300'
    } else {
        tableColor = 'text-red-400'
    }

    let powerColor
    if (value.power > 0) {
        powerColor = 'text-green-300'
    } else {
        powerColor = 'text-red-400'
    }

    return < div className='absolute z-30 w-screen h-screen bg-gray-400/50 flex justify-center items-center p-4 lg:p-8' onClick={(e) => {
        if (e.target === e.currentTarget) {
            close()
        }
    }
    }>
        <div className='bg-white rounded-3xl shadow-lg p-8 w-full md:w-1/2 xl:w-1/3 2xl:w-1/4 z-50' onClick={() => { }}>
            <div className='flex items-center mb-3'>
                <p className='font-bold text-2xl lg:text-3xl flex-grow'>{value.name}</p>
                <button className='p-2 bg-gray-50 rounded-full flex justify-center items-center hover:bg-gray-100 transition-colors duration-100' onClick={close}>
                    <FontAwesomeIcon icon={faTimes} className='w-5' />
                </button>
            </div>
            <div className='flex items-center mb-1'>
                <FontAwesomeIcon icon={faHeadphones} className={`mr-2 w-5 ${decibelColor}`} />
                <p>{value.decibel} dB - {decibelComment}</p>
            </div>
            <div className='flex items-center mb-1'>
                <FontAwesomeIcon icon={faWifi} className={`mr-2 w-5 ${wifiColor}`} />
                <p>{wifiComment}</p>
            </div>
            <div className='flex items-center mb-1'>
                <FontAwesomeIcon icon={faChair} className={`mr-2 w-5 ${chairColor}`} />
                <p>{value.chairs > 0 ? `${value.chairs} ${value.chairs > 1 ? 'Chairs' : 'Chair'}` : 'Chairs Unavailable'}</p>
            </div>
            <div className='flex items-center mb-1'>
                <FontAwesomeIcon icon={faInbox} className={`mr-2 w-5 ${tableColor}`} />
                <p>{value.tables > 0 ? `${value.tables} ${value.tables > 1 ? 'Tables' : 'Table'}` : 'Tables Unavailable'}</p>
            </div>
            <div className='flex items-center mb-3'>
                <FontAwesomeIcon icon={faPlug} className={`mr-2 w-5 ${powerColor}`} />
                <p>{value.power > 0 ? `${value.power} ${value.power > 1 ? 'Power Outlets' : 'Power Outlet'}` : 'Power Unavailable'}</p>
            </div>
            <p>{value.notes ? `Notes: ${value.notes}` : ''}</p>
        </div>
    </div >
}
