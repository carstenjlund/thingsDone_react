import React, { useState, useEffect } from 'react';

import ThingsDoneList from '../../components/ThingsDoneList/ThingsDoneList.js'
import ThingsDoneNumber from '../../components/ThingsDoneNumber/ThingsDoneNumber.js'
import AddThingForm from '../../components/AddthingForm/AddthingForm.js'

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
                <ThingsDoneList thingsDone={thingsDone} />
                <ThingsDoneNumber NoOfThings={thingsDone.length} />
                <AddThingForm updateThings={updateThings} />
            </section >
        );
    }
}