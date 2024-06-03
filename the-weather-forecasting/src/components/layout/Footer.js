import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter bgColor='primary' style={{margin: '60px 0px 0px 0px' }} className='text-white text-center text-lg-left'>
      <MDBContainer className='p-4'>
        <MDBRow>
          <MDBCol lg='6' md='8' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>About iHub</h5>

            <p>
              IIT Mandi iHub and HCI Foundation is a Technology Innovation Hub (TIH). It is focused on Human-Computer Interaction (HCI).
              The Hub was incorporated on 24th  September 2020.
              It is set up by the Indian Institute of Technology (IIT) Mandi under India’s National Mission on Interdisciplinary Cyber-Physical Systems (NM-ICPS). 
              The iHub is planned to make India a leader in human-computer interaction (HCI) research in the world!
            </p>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Quick Links</h5>

            <ul className='list-unstyled mb-0'>
              <li>
                <a href='#!' className='text-white'>
                  Link 1
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                  Link 2
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                  Link 3
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                  Link 4
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase mb-0'>Quick Links</h5>

            <ul className='list-unstyled'>
              <li>
                <a href='#!' className='text-white'>
                  Link 1
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                  Link 2
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                  Link 3
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                  Link 4
                </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}  >
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-white' href='https://iitmandiihub.in'>
          IIT Mandi ihub and HCI Foundation !
        </a>
      </div>
    </MDBFooter>
  );
}