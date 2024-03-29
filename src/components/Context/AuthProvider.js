import React from 'react'
import { useHistory } from 'react-router-dom';
import { auth } from '../../firebase/config'
import { Spin } from 'antd';

export const AuthContext = React.createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const history = useHistory();

  React.useEffect(() => {
    const unsubcribed = auth.onAuthStateChanged((user) => {

      if (user) {
        const { displayName, email, uid, photoURL } = user;

        setUser({
          displayName,
          email,
          uid,
          photoURL
        });

        setLoading(false);

        history.push('/');
        return;
      }

      setLoading(false);
      history.push('/login');
    });

    //clean function
    return () => {
      unsubcribed();
    }
  }, [history])

  return (
    <AuthContext.Provider value={{ user }}>
      {loading ? <Spin /> : children}
    </AuthContext.Provider>
  )
}
