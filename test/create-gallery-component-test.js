'use strict';

describe('Create Gallery Component', function(){
  beforeEach( () => {
    angular.mock.module('cfgram');
    angular.mock.inject(($rootScope, $componentController, $httpBackend, authService) => {
      this.$rootScope = $rootScope;
      this.$componentController = $componentController;
      this.$httpBackend = $httpBackend;
      this.authService = authService;
    });
  });

  describe('createGalleryCtrl.createGallery()', () => {
    it('should make a valid POST request', () => {
      let url = `${__API_URL__}/api/gallery`;
      let exampleGallery = {
        name: 'test name',
        desc: 'test description'
      };

      let headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer test token'
      };


      this.$httpBackend.expectPOST(url, exampleGallery, headers).respond(200);

      let createGalleryCtrl = this.$componentController('createGallery', null);
      
      createGalleryCtrl.gallery = exampleGallery;
      expect(createGalleryCtrl.gallery.name).toEqual(exampleGallery.name);
      expect(createGalleryCtrl.gallery.desc).toEqual(exampleGallery.desc);
      createGalleryCtrl.createGallery();
      this.$httpBackend.flush();
      this.$rootScope.$apply();
    })
  })
})