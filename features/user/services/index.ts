export const handleUserData = (onAuthStateChanged, auth, cb) => {
  onAuthStateChanged(auth, (user) => {
    cb(user);
  });
};
