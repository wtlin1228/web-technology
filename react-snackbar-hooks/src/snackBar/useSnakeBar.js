import { useContext } from 'react';

import { SnackBarContext } from './SnackBarProvider';

const useSnackBar = () => useContext(SnackBarContext);

export default useSnackBar;