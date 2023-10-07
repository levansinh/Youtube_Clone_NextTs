import { useRef, useState } from 'react';
import {
  Box,
  FormControl,
  OutlinedInput,
  makeStyles,
  outlinedInputClasses,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import HeadlessTippy from '@tippyjs/react/headless';
import { SubmitForm } from './types';
import SearchIcon from '@mui/icons-material/Search';
import styles from './styles';

export default function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [showResult, setShowResult] = useState(false);
  const inputRef = useRef();
  const { register, handleSubmit } = useForm<SubmitForm>({
    mode: 'onChange',
  });
  const onSubmit = () => {
    // navigate(PATH_PUBLIC.product.search(searchValue));
    const inputElement = inputRef.current as unknown as HTMLInputElement;
    inputElement.blur();
    // handleHideResult();
  };
  const handleChange = (e: React.PointerEvent<HTMLInputElement>) => {
    const searchValue = e.currentTarget.value;
    if (!searchValue.startsWith(' ')) {
      setSearchValue(searchValue);
    }
  };
  return (
    <Box
      component={'form'}
      noValidate
      sx={{ width: '100%' }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormControl fullWidth sx={{ position: 'relative' }}>
        <OutlinedInput
          classes={outlinedInputClasses}
          sx={styles.outlineInput}
          fullWidth
          {...register('searchValue', {
            onChange: (e) => handleChange(e),
          })}
          inputRef={(e) => {
            inputRef.current = e;
          }}
          onFocus={() => setShowResult(true)}
          value={searchValue}
          size="small"
          placeholder="Searching for..."
          endAdornment={<SearchIcon sx={styles.searchBtn} />}
        />
        {/* {!!searchValue && !isFetching && <ClearIcon fontSize="small" sx={} onClick={handleClear} />}
       {isFetching && <RefreshIcon fontSize="small" sx={} />} */}
      </FormControl>
    </Box>
  );
}
