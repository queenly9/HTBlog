import React from 'react';
import {TextField} from "@mui/material";

function Guest() {
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: 100 }}>
                <div style={{
                    width: '400px',
                    height: '600px',
                    backgroundColor: '#fff',
                    borderRadius: '20px',
                    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
                    display: 'flex',
                    flexDirection: 'row',
                }}>
                    <div style={{ padding: 50, display: 'flex', alignSelf: 'flex-start', color: 'lightgrey', flexDirection: 'column'}}>
                        <div style={{ marginBottom: 20 }}>방명록 남기는 곳인데 개발 능력 이슈로 아직...</div>
                        <TextField id="outlined-basic" label="방명록을 남겨주세요 ~ ♡" variant="outlined"
                                   sx={{
                                       "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                                           borderColor: "lightgrey",
                                       },
                                       "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                                           borderColor: "lightgrey",
                                       },
                                       "&.Mui-focused .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                                           borderColor: "lightgrey",
                                       },
                                       color: 'lightgrey',
                        }} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Guest;
