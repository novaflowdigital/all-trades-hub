import test from 'node:test';
import assert from 'node:assert/strict';
import {
  COMPANY_DETAILS,
  TRADE_SERVICES,
  validateQuoteForm,
  createQuoteRecord,
  filterTradeServices,
  checkSuburbCoverage,
} from './tradeLogic';

test('COMPANY_DETAILS preserves original All Trades Hub contact details', () => {
  assert.equal(COMPANY_DETAILS.name, 'All Trades Hub');
  assert.equal(COMPANY_DETAILS.phoneDisplay, '0473 372 272');
  assert.equal(COMPANY_DETAILS.email, 'info@alltradeshub.com.au');
  assert.equal(COMPANY_DETAILS.primarySlogan, 'One Team. Every Trade. Every Time.');
  assert.equal(COMPANY_DETAILS.hookTitle, 'Trade Solutions made simple');
});

test('validateQuoteForm rejects empty required fields and invalid phone numbers', () => {
  const result = validateQuoteForm({
    fullName: 'A',
    phone: '123',
    email: 'invalid-email',
    suburb: '',
    selectedTrades: [],
    propertyType: 'residential',
    urgency: 'standard',
    description: '',
  });

  assert.equal(result.valid, false);
  assert.ok(result.errors.fullName);
  assert.ok(result.errors.phone);
  assert.ok(result.errors.email);
  assert.ok(result.errors.suburb);
  assert.ok(result.errors.selectedTrades);
});

test('validateQuoteForm accepts valid Australian mobile enquiry and creates reference record', () => {
  const validInput = {
    fullName: 'Liam OConnor',
    phone: '0473 372 272',
    email: 'liam@example.com.au',
    suburb: 'Fremantle 6160',
    selectedTrades: ['electrical', 'painting'] as const,
    propertyType: 'residential' as const,
    urgency: 'priority' as const,
    description: 'Need interior repaint and LED downlights installed before settlement.',
  };

  const validation = validateQuoteForm({
    ...validInput,
    selectedTrades: [...validInput.selectedTrades],
  });
  assert.equal(validation.valid, true);

  const record = createQuoteRecord(
    {
      ...validInput,
      selectedTrades: [...validInput.selectedTrades],
    },
    1
  );
  assert.equal(record.referenceId, 'ATH-FRE-1041');
  assert.ok(record.assignedCoordinator.includes('Multi-Trade'));
  assert.ok(record.estimatedCallback.includes('60 minutes'));
});

test('filterTradeServices filters by search query accurately', () => {
  const electricalOnly = filterTradeServices(TRADE_SERVICES, 'all', 'switchboard');
  assert.equal(electricalOnly.length, 1);
  assert.equal(electricalOnly[0].id, 'electrical');

  const allServices = filterTradeServices(TRADE_SERVICES, 'residential', '');
  assert.equal(allServices.length, 6);
});

test('checkSuburbCoverage identifies Fremantle and WA postcodes', () => {
  const freo = checkSuburbCoverage('Fremantle');
  assert.equal(freo.matched, true);
  assert.equal(freo.suburbName, 'Fremantle (6160)');

  const postcode = checkSuburbCoverage('6158');
  assert.equal(postcode.matched, true);
  assert.equal(postcode.suburbName, 'East Fremantle (6158)');
});
