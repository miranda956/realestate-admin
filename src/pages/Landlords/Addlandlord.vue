
<template>

<form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="firstName">firstName</label>
      <input type="text" class="form-control" id="f_name" v-model="landlord.f_name">
    </div>
    <div class="form-group col-md-6">
      <label for="l_name">LastName</label>
      <input type="text" class="form-control" id="l_name" v-model="landlord.l_name">
    </div>
  </div>
  <div class="form-group">
    <label for="email">Email</label>
    <input type="email" class="form-control" id="email" placeholder="example@gmail.com" v-model="landlord.email">
  </div>
  <div class="form-group">
    <label for="contact">contact</label>
    <input type="text" class="form-control" id="contact" placeholder="0741402565" v-model="landlord.contact">
  </div>
  <div class="form-group">
  <label class="control-label col-sm-offset-2 col-sm-2" for="gender">Gender</label>
        <div class="col-sm-6 col-md-4">
        <select id="gender" class="form-control" v-model="landlord.gender">
                             <option>Male</option>
                             <option>Female</option>
        </select>
      </div>
    </div>
    <div class="form-group">
    <label for="contact">city</label>
    <input type="text" class="form-control" id="city" placeholder="Nanyuku" v-model="landlord.city">
  </div>
  <div class="form-group">
    <label for="contact">password</label>
    <input type="password" class="form-control" id="pwd" placeholder="" v-model="landlord.pwd">
  </div>
  <div class="form-group">
  </div>
  <button type="submit" class="btn btn-primary" @click="saveLandlord">ADD</button>
</form>
</template>
<script>
import LandlordDataservice from "../../services/LandlordDataservice";


export default {
    name:'landlord-new',
    data () {
    return {
      landlord: {
        id: null,
        f_name: '',
        l_name: '',
        email: '',
        contact:'',
        gender:'',
        city:'',
        pwd:'',
        message:''

      }
    }
  },

   methods: {
    saveLandlord() {
      var data = {
    f_name:this.landlord.f_name,
		l_name:this.landlord.l_name,
    email:this.landlord.email,
    contact:this.landlord.contact,
    gender:this.landlord.gender,
    city:this.landlord.city,
		pwd:this.landlord.pwd,
      };
      LandlordDataservice.create(data)
        .then(response => {
          this.landlord.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
          this.message='success'
        })
        .catch(e => {
          console.log(e);
        });
	},
    newlandlord() {
      this.submitted = false;
      this.landlord = {};
    }
  }
}

</script>

