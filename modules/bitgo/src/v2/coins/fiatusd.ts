/**
 * @prettier
 */
import {
  BaseCoin,
  BitGoBase,
  KeyPair,
  MethodNotImplementedError,
  ParsedTransaction,
  ParseTransactionOptions,
  SignedTransaction,
  SignTransactionOptions,
  VerifyAddressOptions,
  VerifyTransactionOptions,
} from '@bitgo/sdk-core';

export class FiatUsd extends BaseCoin {
  static createInstance(bitgo: BitGoBase): BaseCoin {
    return new FiatUsd(bitgo);
  }

  /**
   * Returns the factor between the base unit and its smallest subdivison
   * @return {number}
   */
  getBaseFactor() {
    return 1e2;
  }

  getChain() {
    return 'fiatusd';
  }

  getFamily() {
    return 'fiat';
  }

  getFullName() {
    return 'USD Dollar';
  }

  /**
   * Return whether the given m of n wallet signers/ key amounts are valid for the coin
   */
  isValidMofNSetup({ m, n }: { m: number; n: number }) {
    return m === 0 && n === 0;
  }

  isValidAddress(address: string): boolean {
    throw new MethodNotImplementedError();
  }

  generateKeyPair(seed?: Buffer): KeyPair {
    throw new MethodNotImplementedError();
  }

  isValidPub(pub: string): boolean {
    throw new MethodNotImplementedError();
  }

  async parseTransaction(params: ParseTransactionOptions): Promise<ParsedTransaction> {
    return {};
  }

  isWalletAddress(params: VerifyAddressOptions): boolean {
    throw new MethodNotImplementedError();
  }

  async verifyTransaction(params: VerifyTransactionOptions): Promise<boolean> {
    return true;
  }

  async signTransaction(params: SignTransactionOptions = {}): Promise<SignedTransaction> {
    throw new MethodNotImplementedError();
  }
}