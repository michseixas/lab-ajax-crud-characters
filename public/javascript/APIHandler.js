class APIHandler {
  constructor (baseUrl) {
    this.api = axios.create({baseURL: baseUrl})
    this.BASE_URL = baseUrl; //
  }

  getFullList () { //all the information is being retrieved from db.json
    return this.api.get('/characters')
    .then(response =>{
      console.log('Retrieving all the characters')
      console.log('response data', response.data)
      return response.data
    })
    .catch(() => {
      console.log('This is not working, no characters here!')
      return 'This is not working, no characters here!'
    })

  }

  getOneRegister (id) { //retrieving one by id
		return this.api
			.get(`/characters/${id}`)
			.then((response) => {
				console.log('Character FOUND by ID');
				return response.data;
			})
			.catch(() => {
				console.log('Character NOT FOUND by ID');
				return 'Character NOT FOUND by ID';
			});
	}

  createOneRegister (newCharacter) { //creating one character
		return this.api.post('/characters', newCharacter).then(() => {
			console.log('New character created');
		});
	}
  updateOneRegister (id, editedCharacter) { //update one 
		return this.api
			.put(`${this.BASE_URL}/characters/${id}`, editedCharacter)
			.then(() => {
				console.log('Character has been successfully updated');
				return 'Character has been successfully updated';
			})
			.catch(() => 'Character not found');
	}
  deleteOneRegister (id) {
		return this.api
			.delete(`/characters/${id}`)
			.then(() => {
				console.log('Character has been successfully deleted');
				return 'Character has been successfully deleted';
			})
			.catch(() => 'Character not found');
	}
}