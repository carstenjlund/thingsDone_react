import React from 'react';

import ThingsDoneList from '../../components/ThingsDoneList/ThingsDoneList.js'
import ThingsDoneNumber from '../../components/ThingsDoneNumber/ThingsDoneNumber.js'
import AddThingForm from '../../components/AddthingForm/AddthingForm.js'

import './ThingsDone.css';

export function ThingsDone() {

    return (
        <section className="thingsdone">
            <ThingsDoneList />
            <ThingsDoneNumber />
            <AddThingForm />
        </section >
    )
}