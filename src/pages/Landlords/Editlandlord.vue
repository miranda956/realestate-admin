

<template>

	<div class="signup-form">
    <form >
		<h2>Realproperty</h2>
		<p class="hint-text">Update Landlord .</p>
        <div class="form-group">
			<input type="text" class="form-control" name="firstName" placeholder="firstName" v-model="currentlandlord.f_name" />
        </div>
		<div class="form-group">
		<input type="text" class="form-control" name="lastName" placeholder="lastName" v-model="currentlandlord.l_name"/>
		</div>
        <div class="form-group">
        	<input type="text" class="form-control" name="email" placeholder="Email" v-model="currentlandlord.email"/>
        </div>
		<div class="form-group">
            <input type="text" class="form-control" name="contact" placeholder="contact"  v-model="currentlandlord.contact">
        </div>
        <div class="form-group">
  <label class="control-label col-sm-offset-2 col-sm-2" for="gender">Gender</label>
        <div class="col-sm-6 col-md-4">
        <select id="gender" class="form-control" v-model="currentlandlord.gender">
                             <option>Male</option>
                             <option>Female</option>
        </select>
      </div>
    </div>
    	<div class="form-group">
            <input type="text" class="form-control" name="city" placeholder="Nanyuki"  v-model="currentlandlord.city">
        </div>
		<div class="form-group">
            <button type="submit" class="btn btn-success btn-lg btn-block" @click="updatestaff" >Upate</button>
        </div>
    </form>
</div>
</template>

<script>
import LandlordDataService from "../../services/LandlordDataservice"
export default {

    name:'landlord-edit',
    data () {
    return {

      currentlandlord: {},
      message: ''
    }
  },

  methods: {
    getlandlord(id) {
      landlordDataService.get(id)
        .then(response => {
          this.currentlandlord = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    updateprofile() {
      var data = {
        id: this.currentstaff.id,
        f_name: this.currentlandlord.f_name,
        l_name: this.currentlandlord.l_name,
        email: this.currentlandlord.email,
        contact:this.currentlandlord.contact,
        gender:this.currentlandlord.gender,
        city:this.currentlandlord.city

      };

      staffDataService.update(this.currentlandlord.id, data)
        .then(response => {

          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    updatestaff() {
      staffDataService.update(this.currentlandlord.id, this.currentlandlord)
        .then(response => {
          console.log(response.data);
          this.message = ' updated successfully!';
        })
        .catch(e => {
          console.log(e);
        });
    },
  }
}
</script>


