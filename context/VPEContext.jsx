import React, { createContext, useContext, useReducer } from "react";

 const vpeContextParams = {
    patientConcerns: [],
    medicalHistory: [],
    dailyMetrics: [],
    images: [],
    videos: [],
    physicianNotes: [],
    entityMentions: [],
    entities: []
};

const VPEContext = createContext({});

const reducerMapping = {
    SET_PATIENT_CONCERNS: "patientConcerns",
    SET_MEDICAL_HISTORY: "medicalHistory",
    SET_DAILY_METRICS: "dailyMetrics",
    SET_IMAGES: "images",
    SET_VIDEOS: "videos",
    SET_PHYSICIAN_NOTES: "physicianNotes",
    SET_ENTITY_MENTIONS: "entityMentions",
    SET_ENTITIES: "entities"
};

const vpeReducer = (state, { type, payload }) => {
    if (Object.keys(reducerMapping).includes(type)) {
        return {
            ...state,
            [reducerMapping[type]]: payload
        }
    } else {
        console.error(`fetch action type: ${type} does not exist`);
        return state;
    }
};

export const VPEContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(vpeReducer, vpeContextParams);
    const value = { state, dispatch };
    return <VPEContext.Provider value={value}>{children}</VPEContext.Provider>;
};

export const useVPEContext = () => {
    const {
        state: {
            patientConcerns,
            medicalHistory,
            dailyMetrics,
            images,
            videos,
            physicianNotes,
            entityMentions,
            entities
        },
        dispatch,
    } = useContext(VPEContext);

    const setPatientConcerns = (patientConcerns) => {
        dispatch({
            type: "SET_PATIENT_CONCERNS",
            payload: patientConcerns
        });
    };

    const setMedicalHistory = (medicalHistory) => {
        dispatch({
            type: "SET_MEDICAL_HISTORY",
            payload: medicalHistory
        });
    };

    const setDailyMetrics = (dailyMetrics) => {
        dispatch({
            type: "SET_DAILY_METRICS",
            payload: dailyMetrics
        });
    };

    const setImages = (images) => {
        dispatch({
            type: "SET_IMAGES",
            payload: images
        });
    };

    const setVideos = (videos) => {
        dispatch({
            type: "SET_VIDEOS",
            payload: videos
        });
    };

    const setPhysicianNotes = (physicianNotes) => {
        dispatch({
            type: "SET_PHYSICIAN_NOTES",
            payload: physicianNotes
        });
    };

    const setEntityMentions = (entityMentions) => {
        dispatch({
            type: "SET_ENTITY_MENTIONS",
            payload: entityMentions
        });
    };
    
    const setEntities = (entities) => {
        dispatch({
            type: "SET_ENTITIES",
            payload: entities
        });
    };

    return {
        state: {
            patientConcerns,
            medicalHistory,
            dailyMetrics,
            images,
            videos,
            physicianNotes,
            entityMentions,
            entities
        },
        action: {
            setPatientConcerns,
            setMedicalHistory,
            setDailyMetrics,
            setImages,
            setVideos,
            setPhysicianNotes,
            setEntityMentions,
            setEntities
        },
    };
};

export default {
    VPEContextProvider,
    useVPEContext
};