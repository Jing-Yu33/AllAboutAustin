import React from 'react';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from './actions'
import * as ActionTypes from './constants/ActionTypes'
import fetchMock from 'fetch-mock'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe(' plain actions', () => {
    it('foodWeight: should set food weight to 50', () => {
      const value = 50
      const expectedAction = {
        type: ActionTypes.FOOD_WEIGHT,
        payload: 50
      }
      expect(actions.foodWeight(value)).toEqual(expectedAction)
    })

    it('trafficWeight: should set traffic weight to 40', () => {
      const value = 40
      const expectedAction = {
        type: ActionTypes.TRAFFIC_WEIGHT,
        payload: 40
      }
      expect(actions.trafficWeight(value)).toEqual(expectedAction)
    })

    it('educationWeight: should set education weight to 30', () => {
      const value = 30
      const expectedAction = {
        type: ActionTypes.EDUCATION_WEIGHT,
        payload: 30
      }
      expect(actions.educationWeight(value)).toEqual(expectedAction)
    })
  })

  describe('async actions', () => {
    afterEach(() => {
      fetchMock.restore()
    })
  
    it('creates GET_ALL_ZIPCODES when fetching zipcodes has been done', () => {
      fetchMock.getOnce('/zipcodes', {
        headers: { 'content-type': 'application/json' }
      })
      
      const expectedActions = [
        { type: ActionTypes.GET_ALL_ZIPCODES }
      ]

      const store = mockStore({ zipcodes: [] })
  
      return store.dispatch(actions.GetAllZipcodes()).then(() => {
        // return of async actions
        expect(store.getActions()[0].type).toEqual(expectedActions[0].type)
      })
    })

  })  