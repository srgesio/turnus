"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';
import { patientsData } from '../../../data/patients';

interface PatientsContextType {
    patients: Patient[];
    setPatients: React.Dispatch<React.SetStateAction<Patient[]>>;
    loading: boolean;
    error: string | null;
}
const PatientsContext = createContext<PatientsContextType | undefined>(undefined);

export const PatientsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [patients, setPatients] = useState<Patient[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                await new Promise((resolve) => setTimeout(resolve, 1000));
                setPatients(patientsData as unknown as Patient[]);
            } catch {
                setError('Failed to load patients data');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <PatientsContext.Provider value={{ patients, setPatients, loading, error }}>
            {children}
        </PatientsContext.Provider>
    );
};

export const usePatients = (): PatientsContextType => {
    const context = useContext(PatientsContext);
    if (!context) {
        throw new Error('usePatients must be used within a PatientsProvider');
    }
    return context;
};