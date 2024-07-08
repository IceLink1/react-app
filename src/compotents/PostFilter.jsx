import React from 'react';
import MyInput from "./icelink/input/myInput";
import MySelect from "./icelink/select/MySelect";

const PostFilter = ({filter,setFilter}) => {
    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={e => setFilter({...filter,query:e.target.value})}
                placeholder="search..."
            />
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue={"Default"}
                options={[
                    {value: 'title', name: 'Name posts'},
                    {value: 'body', name: 'Name value'},
                ]}/>
        </div>
    );
};

export default PostFilter;