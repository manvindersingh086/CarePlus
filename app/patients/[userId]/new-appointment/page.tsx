import AppointmentForm from '@/components/forms/AppointmentForm'
import { getPatient, getUser } from '@/lib/actions/patient.actions'
import Image from 'next/image'
import React from 'react'

const NewAppointment = async ({params: { userId }}: SearchParamProps) => {
  
  const patient = await getPatient(userId);


  return (
    <div className='flex h-screen max-h-screen'>
       <section className="remove-scrollbar container">
          <div className="sub-container max-w-[860px] flex-1 justify-between">
            <Image
              src="/assets/icons/logo-full.svg"
              height={1000}
              width={1000}
              alt="patient"
              className="mb-12 h-10 w-fit"
            />

            <AppointmentForm 
                type="create"
                userId={""}
                patientId={""}
            />

            <div className="text-14-regular mt-20 flex justify-between">
                <p className="py-12">
                  &copy; 2024 CarePulse
                </p>
               
            </div>
          </div>
      </section>
      <Image
        src="/assets/images/appointment-img.png"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[390px] bg-bottom"
        />
    </div>
  )
}

export default NewAppointment