<template>
    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
        <div class="container-full">
            <!-- Main content -->
            <section class="content">
                <div class="container">
                    <div class="row">
                        <div class="col-md-10 col-md-offset-2 col-sm-10 col-sm-offset-2">
                            <div style="">
                                <form novalidate
                                      id="form-create-company" name="editForm" role="form">
                                    <div class="panel panel-default">
                                        <div class="panel-heading" style="
                                            background: #fff;
                                            color: #000;
                                            font-size: 2rem;
                                            padding: 1.5rem;
                                        ">Register company information</div>
                                        <div class="panel-body" style="min-height: 295px;padding-top:1.5rem">

                                            <div id="create-company-place" class="form-horizontal mt-2" style="">
                                                <div class="form-group row">
                                                    <label for="" class="control-label col-md-3">Company name:
                                                        <span class="text-danger">*</span></label>
                                                    <div class="col-md-9">
                                                        <input type="text" id="company_name" name="name"
                                                               value="" placeholder="Company name"
                                                               class="form-control"
                                                               :class="{'valid': !$v.company.name.$invalid, 'invalid': $v.company.name.$invalid }"
                                                               v-model="$v.company.name.$model"></div>
                                                </div>
                                                <div class="form-group row"><label for=""
                                                                                   class="control-label col-md-3">Tax code: </label>
                                                    <div class="col-md-9"><input type="text" id="tax_code" name="code"
                                                                                 v-model="$v.company.code.$model"
                                                                                 placeholder="Tax code"
                                                                                 class="form-control">
                                                    </div>
                                                </div>
                                                <div class="form-group row"><label for=""
                                                                                   class="control-label col-md-3">Scope of work: <span class="text-danger">*</span></label>
                                                    <div class="col-md-9" v-if="careers">
                                                        <v-select
                                                            name="scopeWork"
                                                            :class="{'valid': !$v.company.scopeWork.$invalid, 'invalid': $v.company.scopeWork.$invalid }"
                                                            multiple
                                                            label="title"
                                                            v-model="$v.company.scopeWork.$model"
                                                            :options="careers"
                                                            :reduce="c => c.id"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="form-group row"><label for=""
                                                                                   class="control-label col-md-3">Address: <span
                                                        class="text-danger">*</span></label>
                                                    <div class="col-md-9"><input type="text" id="company_address"
                                                                                 name="address" value=""
                                                                                 v-model="$v.company.address.$model"
                                                                                 placeholder="Address"
                                                                                 class="form-control">
                                                    </div>
                                                </div>
                                                <div class="form-group row"><label for=""
                                                                                   class="control-label col-md-3">Phone:
                                                    <span class="text-danger">*</span></label>
                                                    <div class="col-md-9"><input type="text" id="company_phone"
                                                                                 name="phone"
                                                                                 value="" placeholder="Phone"
                                                                                 v-model="$v.company.phone.$model"
                                                                                 class="form-control"></div>
                                                </div>
                                                <div class="form-group row"><label for=""
                                                                                   class="control-label col-md-3">Email:
                                                    <span
                                                        class="text-danger">*</span></label>
                                                    <div class="col-md-9">
                                                        <input type="email" id="company_email"
                                                               name="email" value=""
                                                               v-model="$v.company.email.$model"
                                                               placeholder="email@company.com"
                                                               class="form-control">
                                                        <div
                                                            v-if="$v.company.email.$anyDirty && $v.company.email.$invalid">
                                                            <small class="form-text text-danger"
                                                                   v-if="!$v.company.email.required">
                                                                Your email is required.
                                                            </small>
                                                            <small class="form-text text-danger"
                                                                   v-if="!$v.company.email.email">
                                                                Your email is invalid.
                                                            </small>
                                                            <small class="form-text text-danger"
                                                                   v-if="!$v.company.email.minLength">
                                                                Your email is required to be at least 5 characters.
                                                            </small>
                                                            <small class="form-text text-danger"
                                                                   v-if="!$v.company.email.maxLength">
                                                                Your email cannot be longer than 50 characters.
                                                            </small>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="form-group row">
                                                    <label for="" class="control-label col-md-3">Logo:</label>
                                                    <div v-if="company.logo" class="col-md-3">
                                                        <img style="border: 1px solid red" width="60" height="60" :src="company.logo" alt="">
                                                    </div>
                                                    <div class="" :class="{'col-md-6' : company.logo, 'col-md-9': !company.logo}">
                                                        <input ref="files" type="file" name="logo"
                                                                                 v-on:change="handleFilesUpload($event)"
                                                                                 style="margin-top: 10px;">
                                                    </div>
                                                </div>
                                                <div class="form-group row"><label for=""
                                                                                   class="control-label col-md-3">Website:</label>
                                                    <div class="col-md-9"><input type="text" name="website" value=""
                                                                                 v-model="$v.company.website.$model"
                                                                                 placeholder="http://website.com"
                                                                                 class="form-control"></div>
                                                </div>
                                                <div class="form-group row">
                                                    <label for="" class="control-label col-md-3">Company size:
                                                        <span class="text-danger">*</span></label>
                                                    <div class="col-md-9">
                                                        <select v-if="companySizes" name="companySize" id="companySize"
                                                                class="form-control"
                                                                v-model="$v.company.companySize.$model"
                                                                style="width: 100%;" tabindex="-1"
                                                                aria-hidden="true">
                                                            <option v-for="(s, i) in companySizes" :key="i"
                                                                    :value="s.id">{{ s.name }}
                                                            </option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div class="form-group row">
                                                    <label for="" class="control-label col-md-3">Company description: </label>
                                                    <div class="col-md-9" v-if="customToolbar">
                                                        <vue-editor v-model="$v.company.description.$model"
                                                                    :editorToolbar="customToolbar"></vue-editor>
                                                    </div>
                                                </div>


                                            </div>
                                        </div>
                                        <div class="panel-footer">
                                            <router-link tag="button" :to="{name: 'Dashboard'}" class="btn btn-secondary">
                                                <font-awesome-icon icon="ban"></font-awesome-icon>&nbsp;
                                                <span >Hủy</span>
                                            </router-link>
                                            <button type="button" @click="save" :disabled="$v.company.$invalid"
                                                    class="btn btn-primary">
                                                <font-awesome-icon
                                                    icon="save"></font-awesome-icon>&nbsp;<span>Save</span>
                                            </button>
                                            <div class="clearfix"></div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script lang="ts" src="./company-edit.component.ts">
</script>

<style scoped>
label {
    margin-bottom: 0 !important;
    padding-top: 10px;
}

.vs__search {
    padding: 4px 5px;
}
</style>
