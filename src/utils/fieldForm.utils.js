export function fieldFormUtils(state, setState){
    const saveMessage = (formValues) => {
        setState(formValues);
      };
    
      const handleFormChange = (e) => {
        const {name, value} = e.target
        setState({...state, [name]: value})
      }
    return {saveMessage,handleFormChange }
}