<template>
  <div class="content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
                <div class="d-flex flex-column-fluid">
                    <!--begin::Container-->
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-1"></div>
                            <div class="col-lg-10">
                                <!--begin::Card-->
                                <div class="card card-custom gutter-b example example-compact">

                                    <!--begin::Form-->
                                    <form class="form" id="uploadProduct">
                                        <div class="card-body">
                                            <h3 class="font-size-lg text-dark text-center font-weight-bold mb-6">Add A New Product</h3>
                                            <hr>
                                            <div class="mb-15">
                                                <div class="py-3 row">
                                                    <label class="col-lg-3 bmd-label-floating">Product Name:</label>
                                                    <div class="col-lg-6">
                                                        <input type="text" name="productName" id="productName" class="form-control" placeholder="Enter product name" required>
                                                    </div>

                                                </div>
                                                <!-- <div class="py-3 row">
                                                    <label class="col-lg-3 bmd-label-floating">Product Variant:</label>
                                                    <div class="col-lg-6">
                                                        <input type="text" name="productVariant" id="productVariant" class="form-control" placeholder="product variant" required>
                                                    </div>
                                                </div> -->
                                                <div  class="py-3 row">
                                                    <label class="col-lg-3 bmd-label-floating">Sub Category:</label>
                                                    <div class="col-lg-3">
                                                        <select class="form-control" name="pSubCategory" id="pSubCategory">

                                                        </select>

                                                    </div>
                                                </div>
                                                <div  class="py-3 row">
                                                    <label class="col-lg-3 bmd-label-floating">Description:</label>
                                                    <div class="col-lg-6">
                                                        <textarea class="form-control" id="productDescriptiom" required></textarea>

                                                    </div>
                                                </div>

                                                <div class="py-3 row">
                                                    <label class="col-lg-3 bmd-label-floating">Product Quantity:</label>
                                                    <div class="col-lg-6">
                                                        <input type="number" class="form-control" name="productQuantity" placeholder="Enter product quantity" required>
                                                    </div>
                                                </div>
                                                <div class="py-3 row">
                                                    <label class="col-lg-3 bmd-label-floating">Product Price:</label>
                                                    <div class="col-lg-6">
                                                        <input type="number" class="form-control" name placeholder="Enter product price" required>
                                                    </div>
                                                </div>
                                                <div class="py-3 row">
                                                    <label class="col-lg-3 bmd-label-floating">Product Image</label>
                                                    <div class="col-lg-9 col-xl-6">
                                                        <div class="image-input-wrapper"></div>
                                                        <input type="file" id="product_images_upload"name="product_images" accept=".png, .jpg, .jpeg" multiple>
                                                    </div>
                                                </div>
                                                <div class="py-3 row">
                                                    <label class="col-lg-3 bmd-label-floating">Provider Phone:</label>
                                                    <div class="col-lg-6">
                                                        <input type="text" name="productProvider" class="form-control" placeholder="Enter provider phone" required>
                                                    </div>
                                                </div>
                                                <h3 class="font-size-lg text-dark text-center font-weight-bold mb-6 mt-5">Product Provider location</h3>
                                                <hr>
                                                <div id="map"></div>


                                            </div>
                                            <div class="py-3 row ">
                                                <label class="col-lg-3 bmd-label-floating">Latitude</label>
                                                <div class="col-lg-6">
                                                    <input type="text" id="prLat" class="form-control" placeholder="Selected Latitude" readonly required>
                                                </div>
                                            </div>
                                            <div class="py-3 row ">
                                                <label class="col-lg-3 bmd-label-floating">Longitude</label>
                                                <div class="col-lg-6">
                                                    <input type="text" id="prLong" class="form-control" placeholder="Selected Longitude" readonly required>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="card-footer">
                                          <div class="row">
                                              <div class="px-5">
                                                  <button type="submit" class="btn btn-success mr-2" id="provSubmit">Create</button>
                                              </div>
                                              <div class="px-3">
                                                  <button type="reset" class="btn btn-primary" id="pCancel">Cancel</button>
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

            </div>
          </div>
        </div>
      </div>

</template>
