import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addToList } from '../Slices/ReduxSlice'

export default function All() {
    const [listCount, setListCount] = useState(10)
    const dispatch = useDispatch();
    const { CurrentList } = useSelector((state) => state.List)

    useEffect(() => {
        const APIFunction = async () => {
            const url = `https://restcountries.com/v2/all`
            try {
                const response = await fetch(url);
                const result = await response.json();
                dispatch(addToList(result.slice(0, listCount)))
            } catch (error) {
                console.error(error);
            }
        }
        APIFunction();
    }, [listCount, dispatch])
    return (
        <>
            <div className="d-flex flex-wrap mx-auto">
                {
                    CurrentList.length > 0 ?
                        CurrentList.map((data, index) => {
                            return (
                                <div className="col-sm-6 text-black mb-3 pl-0 shadow-lg" key={index}>
                                    <div className="test d-flex p-3" style={{ border: '2px solid gray' }}>
                                        <div>
                                            <img src={data.flags.png} alt='' width={120} height={100} className='flag-img' />
                                        </div>
                                        <div className='ml-4'>
                                            <h2>{data.name.common ? data.name.common : data.name}</h2>
                                            <p>{data?.region}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }) :
                        <>
                            <div className="loader" id='loader'></div>
                        </>
                }
            </div>
            <div className="row d-flex mx-auto main-btn" style={{ width: '20%' }}>
                <div className="col text-black mb-3">
                    <div className="">
                        <button data-mdb-button-init data-mdb-ripple-init className="btn btn-dark btn-lg btn-block"
                            type="button"
                            onClick={() => { setListCount(ps => ps + 10) }}
                        >Load more</button>
                    </div>
                </div>
            </div>
        </>
    )
}
