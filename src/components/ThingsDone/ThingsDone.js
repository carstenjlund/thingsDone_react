import React, { useState, useEffect } from 'react';

import MyList from '../MyList/MyList.js'
import MyTest from '../MyTest/MyTest.js'
import MyForm from '../MyForm/MyForm.js'

import './ThingsDone.css';

export function ThingsDone() {
    const [thingsDone, setThingsDone] = useState({})
    const [hasError, setErrors] = useState(false);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        try {
            const getData = async () => {
                const res = await fetch("./data.json")
                const jsonres = await res.json()
                setThingsDone(jsonres)
                setIsLoading(false)
            }
            getData();
        } catch (err) {
            setErrors(err)
        }
    }, []);

    const updateThings = newThing => {
        setThingsDone([...thingsDone,
        {
            id: thingsDone.length + 1,
            thing: newThing
        }
        ]);
    }
    if (isLoading) {
        return (
            <section className="thingsdone">
                <div>Loading...</div>
            </section >
        )
    } else {
        return (
            <section className="thingsdone">
                <MyList thingsDone={thingsDone} />
                <MyTest NoOfThings={thingsDone.length} />
                <MyForm updateThings={updateThings} />
            </section >
        );
    }
}