import React from 'react';
import Welcome from './Welcome';
import {Amplify} from 'aws-amplify';
import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from '../aws-exports';
import Dashboard from './Dashboard';

Amplify.configure(awsExports);

function Login() {
  return (
    <div className="Login">
      <Authenticator>
        {({ signOut }) => (
          <main>
            <header className='Login-header'>
              {/* Quiz Component */}
              
              {/* Sign Out Button */}
              <button 
                onClick={signOut} 
                style={{ 
                  margin: '20px', 
                  fontSize: '0.8rem', 
                  padding: '5px 10px', 
                  marginTop: '20px'
                }}
              >
                Sign Out
              </button>
            </header>
          </main>
        )}
      </Authenticator>
    </div>
  );
}

export default withAuthenticator(Login);