<template>

<div class="d-flex flex-column-fluid">
							<!--begin::Container-->
							<div class="container">
								<div class="row">
									<div class="col-lg-1"></div>
									<div class="col-lg-10">
										<!--begin::Card-->
										<div class="card card-custom gutter-b example example-compact">

											<!--begin::Form-->
											<form class="form" id="add_provider">
												<div class="card-body">
													<h3 class="font-size-lg text-dark text-center font-weight-bold mb-6">Update My Profile</h3>
													<hr>
													<div class="mb-15">



														<div class="form-group row">
															<label class="col-lg-3 col-form-label">Phone:</label>
															<div class="col-lg-6">
																<input type="text" name="phone" class="form-control" placeholder="Enter phone number" required>
															</div>
														</div>


														<div class="form-group row">
															<label class="col-lg-3 col-form-label">Email:</label>
															<div class="col-lg-6">
																<input type="email" name="email" class="form-control" placeholder="Enter email" required>
															</div>
														</div>
														<div class="form-group row">
															<label class="col-lg-3 col-form-label">Firstname</label>
															<div class="col-lg-6">
																<input type="text" name="firstname" class="form-control" placeholder="Enter firstname" required>
															</div>
														</div>
														<div class="form-group row">
															<label class="col-lg-3 col-form-label">Lastname</label>
															<div class="col-lg-6">
																<input type="text" name="lastname" class="form-control" placeholder="Enter lastname" required>
															</div>
														</div>


														<h3 class="font-size-lg text-dark text-center font-weight-bold mb-6 mt-5">Provider location</h3>
														<hr>

													</div>
													<div id="map"></div>



													<div class="form-group row mt-5">
														<label class="col-lg-3 col-form-label">Latitude</label>
														<div class="col-lg-6">
															<input type="text" id="providerLatitude" class="form-control" placeholder="Selected Latitude" readonly required>
														</div>
													</div>
													<div class="form-group row mt-5">
														<label class="col-lg-3 col-form-label">Longitude</label>
														<div class="col-lg-6">
															<input type="text" id="providerLongitude" class="form-control" placeholder="Selected Longitude" readonly required>
														</div>
													</div>

												</div>

												<div class="card-footer">
													<div class="row">
														<div class="col-lg-3"></div>
														<div class="col-lg-6">

															<button type="submit" class="btn btn-success mr-2" id="provSubmit">Create</button>
															<button type="reset" class="btn btn-secondary" id="pCancel">Cancel</button>
														</div>
													</div>
												</div>
											</form>
											<!--end::Form-->
										</div>
										<!--end::Card-->

									</div>

								</div>
							</div>
							<!--end::Container-->
						</div>
</template>
